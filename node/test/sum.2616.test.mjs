
import sum2616 from '../sum2616.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 57 to equal 118 + offset 0.30060544812953216', (t) => {
  assert.strictEqual(sum2616(61, 57), 118 + 0.30060544812953216);
});
