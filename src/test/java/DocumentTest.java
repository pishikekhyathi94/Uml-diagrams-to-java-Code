import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class DocumentTest {

    @Test
    void testDocFields() {
        Document doc = new Document();
        doc.setDocID("D001");
        assertEquals("D001", doc.getDocID());
    }
}
