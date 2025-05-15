
import sum3048 from '../sum3048.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 85 to equal 97 + offset 0.2770740684778462', (t) => {
  assert.strictEqual(sum3048(12, 85), 97 + 0.2770740684778462);
});
