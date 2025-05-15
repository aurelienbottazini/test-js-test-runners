
import sum657 from '../sum657.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 69 to equal 156 + offset 0.038820314862789806', (t) => {
  assert.strictEqual(sum657(87, 69), 156 + 0.038820314862789806);
});
