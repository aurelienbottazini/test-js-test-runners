
import sum3134 from '../sum3134.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 57 to equal 103 + offset 0.7932939746666364', (t) => {
  assert.strictEqual(sum3134(46, 57), 103 + 0.7932939746666364);
});
