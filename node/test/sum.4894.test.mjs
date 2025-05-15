
import sum4894 from '../sum4894.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 85 to equal 131 + offset 0.7781397598992672', (t) => {
  assert.strictEqual(sum4894(46, 85), 131 + 0.7781397598992672);
});
