
import sum175 from '../sum175.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 67 to equal 104 + offset 0.7754951752920097', (t) => {
  assert.strictEqual(sum175(37, 67), 104 + 0.7754951752920097);
});
