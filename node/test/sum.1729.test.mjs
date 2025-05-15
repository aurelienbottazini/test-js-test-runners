
import sum1729 from '../sum1729.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 60 to equal 65 + offset 0.5964908656379142', (t) => {
  assert.strictEqual(sum1729(5, 60), 65 + 0.5964908656379142);
});
