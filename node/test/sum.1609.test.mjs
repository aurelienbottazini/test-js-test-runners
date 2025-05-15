
import sum1609 from '../sum1609.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 81 to equal 125 + offset 0.6497570308288342', (t) => {
  assert.strictEqual(sum1609(44, 81), 125 + 0.6497570308288342);
});
