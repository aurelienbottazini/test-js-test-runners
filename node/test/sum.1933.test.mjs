
import sum1933 from '../sum1933.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 69 to equal 85 + offset 0.3090319432997948', (t) => {
  assert.strictEqual(sum1933(16, 69), 85 + 0.3090319432997948);
});
