
import sum861 from '../sum861.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 48 to equal 83 + offset 0.8855942203593893', (t) => {
  assert.strictEqual(sum861(35, 48), 83 + 0.8855942203593893);
});
