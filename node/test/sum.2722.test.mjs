
import sum2722 from '../sum2722.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 6 to equal 92 + offset 0.35822887321113706', (t) => {
  assert.strictEqual(sum2722(86, 6), 92 + 0.35822887321113706);
});
