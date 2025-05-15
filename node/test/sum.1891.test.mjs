
import sum1891 from '../sum1891.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 45 to equal 137 + offset 0.40943323874771576', (t) => {
  assert.strictEqual(sum1891(92, 45), 137 + 0.40943323874771576);
});
