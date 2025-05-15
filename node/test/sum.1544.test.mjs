
import sum1544 from '../sum1544.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 3 to equal 82 + offset 0.3813263940234852', (t) => {
  assert.strictEqual(sum1544(79, 3), 82 + 0.3813263940234852);
});
