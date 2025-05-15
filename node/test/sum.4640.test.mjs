
import sum4640 from '../sum4640.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 79 to equal 125 + offset 0.9518821597229284', (t) => {
  assert.strictEqual(sum4640(46, 79), 125 + 0.9518821597229284);
});
