
import sum393 from '../sum393.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 46 to equal 107 + offset 0.27525683419712765', (t) => {
  assert.strictEqual(sum393(61, 46), 107 + 0.27525683419712765);
});
