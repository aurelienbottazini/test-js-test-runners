
import sum2106 from '../sum2106.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 64 to equal 148 + offset 0.1285715486377319', (t) => {
  assert.strictEqual(sum2106(84, 64), 148 + 0.1285715486377319);
});
