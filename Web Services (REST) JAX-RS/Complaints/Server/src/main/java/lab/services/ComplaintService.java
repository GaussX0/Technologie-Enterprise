package lab.services;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Model;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import lab.data.ComplaintRepository;
import lab.dto.ComplaintDTO;
import lab.entities.Complaint;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import java.util.List;
import java.lang.reflect.Type;
import jakarta.transaction.Transactional;

@ApplicationScoped
public class ComplaintService {
    @Inject
    private ComplaintRepository repository;

    @Transactional
    public void create(ComplaintDTO dto) {
        ModelMapper mapper = new ModelMapper();
        repository.create(mapper.map(dto, Complaint.class));
    }

    @Transactional
    public void edit(ComplaintDTO dto) {
        ModelMapper mapper = new ModelMapper();
        Complaint entity = mapper.map(dto, Complaint.class);

        Complaint existingComplaint = repository.find(entity.getId());
        if (existingComplaint != null) {
            repository.edit(entity);
        }
    }

    @Transactional
    public void remove(ComplaintDTO dto) {
        if (dto != null) {
            ModelMapper mapper = new ModelMapper();
            repository.remove(mapper.map(dto, Complaint.class));
        }
    }

    public ComplaintDTO find(long id) {
        ModelMapper mapper = new ModelMapper();
        return mapper.map(repository.find(id), ComplaintDTO.class);
    }

    public List<ComplaintDTO> findAll() {
        ModelMapper mapper = new ModelMapper();
        List<Complaint> entityList = repository.findAll();
        Type listType =
                new TypeToken<List<ComplaintDTO>>() {}.getType();
        List<ComplaintDTO> dtoList =
                mapper.map(entityList, listType);
        return dtoList;
    }
}
