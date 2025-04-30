import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class DeliveryPreferenceManagerTest {

    @Test
    void testWithMockedDocument() {
        Document mockDoc = mock(Document.class);
        when(mockDoc.getDocID()).thenReturn("D999");

        assertEquals("D999", mockDoc.getDocID());
    }
}
