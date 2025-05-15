
import sum4623 from '../sum4623.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 26 to equal 110 + offset 0.7275760396532215', (t) => {
  assert.strictEqual(sum4623(84, 26), 110 + 0.7275760396532215);
});
