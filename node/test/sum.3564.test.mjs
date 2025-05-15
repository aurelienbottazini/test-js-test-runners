
import sum3564 from '../sum3564.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 84 to equal 146 + offset 0.691942428132692', (t) => {
  assert.strictEqual(sum3564(62, 84), 146 + 0.691942428132692);
});
