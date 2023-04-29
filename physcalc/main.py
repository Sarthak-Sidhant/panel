# Define conversion factors for different units
conversions = {
    "distance": {
        "m": 1,  # meter
        "km": 1000,  # kilometer
        "cm": 0.01,  # centimeter
        "ft": 0.3048,  # foot
        "in": 0.0254,  # inch
        "mi": 1609.34  # mile
    },
    "time": {
        "s": 1,  # second
        "min": 60,  # minute
        "h": 3600  # hour
    },
    "velocity": {
        "m/s": 1,  # meter per second
        "km/h": 0.277778,  # kilometer per hour
        "ft/s": 0.3048,  # foot per second
        "mph": 0.44704  # mile per hour
    },
    "light": {
        "m/s": 299792458  # speed of light in vacuum (meters per second)
    },
    "density": {
        "kg/m^3": 1  # kilogram per cubic meter
    }
    # add more physical quantities and units here
}

def convert(value, from_unit, to_unit, quantity):
    """
    Convert a value from one unit to another for a given physical quantity
    """
    if from_unit == to_unit:
        return value
    else:
        # get conversion factors for the given physical quantity
        factors = conversions[quantity]
        # convert to the base unit first
        value_in_mks = value * factors[from_unit]
        # convert to the target unit
        target_value = value_in_mks / factors[to_unit]
        return target_value

