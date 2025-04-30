import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class UserTest {

    @Test
    void testUserFields() {
        User user = new User();
        user.setUserID("U001");
        user.setName("Teja");
        assertEquals("U001", user.getUserID());
        assertEquals("Teja", user.getName());
    }
}
