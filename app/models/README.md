The models folder contains the "business logic" part. It has broadly the following models:

- `buffs`: Contains settable parameters. This includes features like base stats, raid buffs, personal buffs.
- `spec`: Contains computable parameters, talent choices and settable parameters specific to a spec.
- `profile`: Holds a buffs and a spec instance together. Essentially holds the stored information about a "person". Profiles can be saved and loaded.
- `spell`: Information on the various spells. A "spell" instance corresponds to one spell for one spec, and has the ability to compute various parameters for that spell given a "profile" context. These instances contain all the logic for computing "hps", "hpm" etc.
- `rotation`: To be implemented at a later stage. This should contain information about specifying a "rotation", somehow based on a spell usage model. Given a "profile" instance, a rotation instance can produce an actual "rotation".
