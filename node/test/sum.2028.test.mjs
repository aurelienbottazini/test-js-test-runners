
import sum2028 from '../sum2028.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 67 to equal 158 + offset 0.27283907014382835', (t) => {
  assert.strictEqual(sum2028(91, 67), 158 + 0.27283907014382835);
});
