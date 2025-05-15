
import sum1935 from '../sum1935.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 98 to equal 163 + offset 0.9349116928735726', (t) => {
  assert.strictEqual(sum1935(65, 98), 163 + 0.9349116928735726);
});
