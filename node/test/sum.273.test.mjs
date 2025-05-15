
import sum273 from '../sum273.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 61 to equal 80 + offset 0.4136153187210496', (t) => {
  assert.strictEqual(sum273(19, 61), 80 + 0.4136153187210496);
});
