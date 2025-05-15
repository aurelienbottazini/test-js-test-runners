
import sum544 from '../sum544.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 26 to equal 93 + offset 0.2764362915601478', (t) => {
  assert.strictEqual(sum544(67, 26), 93 + 0.2764362915601478);
});
