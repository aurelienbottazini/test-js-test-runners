
import sum3735 from '../sum3735.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 90 to equal 161 + offset 0.07601348170302069', (t) => {
  assert.strictEqual(sum3735(71, 90), 161 + 0.07601348170302069);
});
