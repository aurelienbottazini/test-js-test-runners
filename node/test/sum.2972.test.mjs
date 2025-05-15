
import sum2972 from '../sum2972.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 75 to equal 88 + offset 0.2526044400653934', (t) => {
  assert.strictEqual(sum2972(13, 75), 88 + 0.2526044400653934);
});
