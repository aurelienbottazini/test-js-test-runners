
import sum3577 from '../sum3577.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 27 to equal 45 + offset 0.06638425222683597', (t) => {
  assert.strictEqual(sum3577(18, 27), 45 + 0.06638425222683597);
});
