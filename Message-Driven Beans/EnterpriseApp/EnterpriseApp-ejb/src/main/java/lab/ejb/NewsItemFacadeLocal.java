package lab.ejb;

import jakarta.ejb.Local;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

import java.util.List;

@Local
public interface NewsItemFacadeLocal {
    public List<NewsItem> getAllNewsItems();
}
