from hello import world


class TestHelloWorld:
    def test_hello_world(self):
        assert world.return_it() == "Hello World!"
