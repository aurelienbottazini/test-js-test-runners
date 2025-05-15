
import sum1857 from '../sum1857.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 43 to equal 142 + offset 0.3661923196417667', (t) => {
  assert.strictEqual(sum1857(99, 43), 142 + 0.3661923196417667);
});
