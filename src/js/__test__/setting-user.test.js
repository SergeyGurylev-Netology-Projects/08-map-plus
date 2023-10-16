import SettingsUser from '../settings-user';

test.each([
  ['theme', 'dark'],
  ['music', 'trance'],
  ['difficulty', 'easy'],
])(
  ('test default user setting "%s"'
  ),
  (setting, expected) => {
    const settingsUser = new SettingsUser();
    const result = settingsUser.get(setting);
    expect(result).toBe(expected);
  },
);

test.each([
  ['theme', 'light'],
  ['theme', 'gray'],
  ['music', 'pop'],
  ['music', 'off'],
  ['difficulty', 'normal'],
  ['difficulty', 'hard'],
])(
  ('test personal user setting "%s" whit value "%s"'
  ),
  (setting, value) => {
    const settingsUser = new SettingsUser();
    settingsUser.set(setting, value);
    const result = settingsUser.get(setting);
    expect(result).toBe(value);
  },
);
