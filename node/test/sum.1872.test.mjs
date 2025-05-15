
import sum1872 from '../sum1872.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 66 to equal 127 + offset 0.7832797757078093', (t) => {
  assert.strictEqual(sum1872(61, 66), 127 + 0.7832797757078093);
});
