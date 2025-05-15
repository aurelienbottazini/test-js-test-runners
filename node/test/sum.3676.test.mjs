
import sum3676 from '../sum3676.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 94 to equal 140 + offset 0.9620113896690401', (t) => {
  assert.strictEqual(sum3676(46, 94), 140 + 0.9620113896690401);
});
