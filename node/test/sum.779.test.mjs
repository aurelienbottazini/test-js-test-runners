
import sum779 from '../sum779.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 72 to equal 106 + offset 0.30433733806792207', (t) => {
  assert.strictEqual(sum779(34, 72), 106 + 0.30433733806792207);
});
