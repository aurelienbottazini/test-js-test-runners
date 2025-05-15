
import sum4697 from '../sum4697.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 30 to equal 77 + offset 0.5491073991699812', (t) => {
  assert.strictEqual(sum4697(47, 30), 77 + 0.5491073991699812);
});
