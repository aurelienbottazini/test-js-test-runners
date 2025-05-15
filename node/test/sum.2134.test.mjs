
import sum2134 from '../sum2134.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 24 to equal 91 + offset 0.10898024399018902', (t) => {
  assert.strictEqual(sum2134(67, 24), 91 + 0.10898024399018902);
});
