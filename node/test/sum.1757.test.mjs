
import sum1757 from '../sum1757.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 80 to equal 165 + offset 0.19273151644796493', (t) => {
  assert.strictEqual(sum1757(85, 80), 165 + 0.19273151644796493);
});
