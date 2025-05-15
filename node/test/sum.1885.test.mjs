
import sum1885 from '../sum1885.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 65 to equal 124 + offset 0.05998709139773151', (t) => {
  assert.strictEqual(sum1885(59, 65), 124 + 0.05998709139773151);
});
