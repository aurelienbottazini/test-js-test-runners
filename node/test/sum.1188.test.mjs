
import sum1188 from '../sum1188.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 45 to equal 47 + offset 0.29514541968142805', (t) => {
  assert.strictEqual(sum1188(2, 45), 47 + 0.29514541968142805);
});
