
import sum3985 from '../sum3985.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 34 to equal 80 + offset 0.30936424446912725', (t) => {
  assert.strictEqual(sum3985(46, 34), 80 + 0.30936424446912725);
});
