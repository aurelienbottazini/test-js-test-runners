
import sum3654 from '../sum3654.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 2 to equal 82 + offset 0.6075284869701016', (t) => {
  assert.strictEqual(sum3654(80, 2), 82 + 0.6075284869701016);
});
