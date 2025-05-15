
import sum3741 from '../sum3741.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 20 to equal 102 + offset 0.1206406320770802', (t) => {
  assert.strictEqual(sum3741(82, 20), 102 + 0.1206406320770802);
});
