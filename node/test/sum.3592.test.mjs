
import sum3592 from '../sum3592.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 85 to equal 138 + offset 0.16946249859836904', (t) => {
  assert.strictEqual(sum3592(53, 85), 138 + 0.16946249859836904);
});
