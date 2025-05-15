
import sum2851 from '../sum2851.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 25 to equal 46 + offset 0.3157415572502712', (t) => {
  assert.strictEqual(sum2851(21, 25), 46 + 0.3157415572502712);
});
