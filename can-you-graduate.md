# Can you graduate?

## Can you graduate? @unplugged
Write a program to determine if a student is eligible to graduate. Create a variable called has_enough_units and a variable called has_met_requirements and set them equal to a ``||game:ask||``.

You can graduate if you have enough units AND you have met the requirements.

Display the results by printing the results in an ``||adventure:add text to textlog||``

## Can you graduate?
Write a program to determine if a student is eligible to graduate. Create a variable called has_enough_units and a variable called has_met_requirements and set them equal to a ``||game:ask||``.

You can graduate if you have enough units AND you have met the requirements.

Display the results by printing the results in an ``||adventure:add text to textlog||``

```python
  has_enough_units = game.ask("Do you have enough credits?", "OK = True, Cancel = False")
  has_met_requirements = game.ask("Have you met the requirements", "OK = True, Cancel = False")

  if has_enough_units and has_met_requirements:
    adventure.add_to_textlog("You can graduate.")
  else:
    adventure.add_to_textlog("You cannot graduate.")
```

