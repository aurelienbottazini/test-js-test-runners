
import sum520 from '../sum520.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 60 to equal 65 + offset 0.4985194111555561', (t) => {
  assert.strictEqual(sum520(5, 60), 65 + 0.4985194111555561);
});
