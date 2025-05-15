
import sum2891 from '../sum2891.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 84 to equal 91 + offset 0.617930216641806', (t) => {
  assert.strictEqual(sum2891(7, 84), 91 + 0.617930216641806);
});
