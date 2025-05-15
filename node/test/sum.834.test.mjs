
import sum834 from '../sum834.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 89 to equal 107 + offset 0.8785882204787522', (t) => {
  assert.strictEqual(sum834(18, 89), 107 + 0.8785882204787522);
});
