
import sum4949 from '../sum4949.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 41 to equal 87 + offset 0.7949162530746502', (t) => {
  assert.strictEqual(sum4949(46, 41), 87 + 0.7949162530746502);
});
