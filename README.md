

<img src="https://cobalt-mvc-develop.s3.us-east-2.amazonaws.com/wwwroot/favicon.ico" alt="Image" height="32" width="32" align="left" style="margin-right:10px;">

## Welcome to the Cobalt Development Team!

This codebase empowers developers to build immersive virtual worlds within the expansive Cobalt universe. Leveraging advanced scripting capabilities and a modular architecture, our framework allows for the seamless integration of dynamic environments, interactive elements, and lifelike simulations.

## Creating Your First World

1. **Instantiate the CobaltDescriptor:** Create an instance of CobaltDescriptor to manage script instances efficiently.

2. **Extend CobaltScript:** Develop custom scripts by extending the CobaltScript base class. Implement the `Start` and `Update` methods to define initialization and update logic for your virtual world entities.

3. **Script Management:** Utilize CobaltDescriptor's methods to seamlessly add, remove, and retrieve CobaltScript instances within the virtual world.

4. **Transform and Quaternion Usage:** Leverage the Transform and Quaternion classes to precisely control the position and orientation of entities within your virtual world.

## Copy our Sample!

```typescript
/**
 * Custom behavior script for entities within the Cobalt Universe.
 * Extends the base CobaltScript class.
 */
export class CobaltBehaviour extends CobaltScript {
    // Public property to control the speed of the entity
    public Speed: number = 1.0;

    /**
     * Constructor for the CobaltBehaviour class.
     * @param id - The identifier for the script instance.
     */
    constructor(id: string) {
        super(id);
    }

    /**
     * Initialization method, executed once.
     */
    public Start() {
        // Initialization logic goes here
    }

    /**
     * Update method, executed once per frame.
     */
    public Update() {
        // Get current position of the entity
        const position: Vector3 = this.transform.GetPosition();

        // Update position based on speed and deltaTime
        position.x += this.Speed * Time.deltaTime;
        position.y += this.Speed * Time.deltaTime;
        position.z += this.Speed * Time.deltaTime;

        // Set the new position
        this.transform.SetPosition(position);
    }
}
```

Embark on an exciting journey of world-building in the Cobalt universe, where imagination knows no bounds. Happy coding!