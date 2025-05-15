
import sum4039 from '../sum4039.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 68 to equal 159 + offset 0.6661617669041795', (t) => {
  assert.strictEqual(sum4039(91, 68), 159 + 0.6661617669041795);
});
